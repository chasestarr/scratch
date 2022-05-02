import * as commander from 'commander';  

const program = new commander.Command();

program
  .command('flowts <package>')
  .option(
    '-x --exclude <excludeGlob>',
    'description',
    (a, b) => [...b, a],
    [],
  )
  .option(
    '-vx --vexclude <vexcludeGlob...>',
    'description',
    []
  )
  .action((packagePath, options) => {
    console.log(packagePath, options);
  });

program.parse(process.argv);
