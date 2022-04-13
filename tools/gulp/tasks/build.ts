import { ROOT_PACKAGE_PATH } from './../config';
import { task, watch, series, dest } from 'gulp';
import { createProject } from 'gulp-typescript';
import * as log from 'fancy-log';
import * as sourcemaps from 'gulp-sourcemaps';

const packages = {
  core: createProject('packages/core/tsconfig.json'),
  common: createProject('packages/common/tsconfig.json'),
  utils: createProject('packages/utils/tsconfig.json'),
  microservices: createProject('packages/microservices/tsconfig.json'),
}

const modules = Object.keys(packages);

/**
 * TODO: 
 * - In dev env, we want to stream the build in node_modules and copy to other folders
 * - In prod build, we want to build into the lib folder for publishing purposes
 */

const distId = process.argv.indexOf('--dist');
const distPath = distId > -1 ? process.argv[distId + 1] : ROOT_PACKAGE_PATH;

function streamingBuild() {
  log.info('Watching files..');
  modules.forEach(packageName => {
    watch(
      [`${ROOT_PACKAGE_PATH}/${packageName}/**/*.ts`,
      `${ROOT_PACKAGE_PATH}/${packageName}/*.ts`],
      series(packageName),
    );
  });
}

/**
 * Builds the given package
 * @param packageName The name of the package
 */
 function buildPackage(packageName: string) {
  return packages[packageName]
    .src()
    .pipe(packages[packageName]())
    .pipe(dest(`${distPath}/${packageName}`));
}

/**
 * Builds the given package and adds sourcemaps
 * @param packageName The name of the package
 */
function buildPackageDev(packageName: string) {
  return packages[packageName]
    .src()
    .pipe(sourcemaps.init())
    .pipe(packages[packageName]())
    .pipe(
      sourcemaps.mapSources(
        (sourcePath: string) => './' + sourcePath.split('/').pop(),
      ),
    )
    .pipe(sourcemaps.write('.', {}))
    .pipe(dest(`${distPath}/${packageName}`));
}

function buildPackages(names: string[]) {
  names.forEach(packageName => {
    task(packageName, () => buildPackage(packageName));
    task(`${packageName}:dev`, () => buildPackageDev(packageName));
  });
}

buildPackages(modules);

task('build', series(modules))
task('default', streamingBuild);