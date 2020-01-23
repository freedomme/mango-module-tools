#!/usr/bin/env node

/**
 * Copyright 2020 Infinite Automation Systems Inc.
 * http://infiniteautomation.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const path = require('path');
const glob = require('glob');
const child_process = require('child_process');

const args = process.argv.slice(2);
const globPattern = args.shift();
const command = args.shift();

const files = glob.sync(globPattern);
for (let f of files) {
    const directory = path.resolve(f);
    console.log(`Executing "${command}" with args "${args}" in "${directory}"`);
    try {
        const output = child_process.execFileSync(command, args, {cwd: directory, shell: true, encoding: 'utf-8'});
        console.log(output);
    } catch (e) {
    }
}