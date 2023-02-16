const execSync = require('child_process').execSync;

const generatePath = '\"projects/lib-openapi\"';
const swaggerPath = 'http://localhost:5045/swagger/v1/swagger.json'
console.log('removing generated/openapi directory...');
execSync(`rmdir ${generatePath} /s /q 2>NUL`);
console.log('Starting Generation...');
const output = execSync(
  `npx @openapitools/openapi-generator-cli generate -g typescript-angular -i ${swaggerPath} -o ${generatePath} --additional-properties=usePromises=true`,
  { encoding: 'utf-8' }
);
console.log(output);