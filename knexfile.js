// Copyright 2019 Iced Development, LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const dbs = {
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || 'postgres://postgres@localhost:5432/hsl',
    pool: {
      min: 1,
      max: 7,
    },
    seeds: {
      directory: './migrations/seed'
    }
  },
  test: {
    client: 'postgresql',
    connection: process.env.TEST_DATABASE_URL || 'postgres://postgres@localhost:5432/hsl-test',
    pool: {
      min: 1,
      max: 7,
    },
    seeds: {
      directory: './migrations/seed'
    }
  },
};

const config = dbs[process.env.NODE_ENV] || dbs.production;

module.exports = config;
