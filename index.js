const yargs = require('yargs')

yargs.command({
	command: 'add',
	describe: 'Add new note to list',
	builder: {
		title: {
			type: 'string',
			describe: 'Note title',
			demandOption: true
		}
	},
	handler() {
		console.log("add")
	}
})

yargs.command({
	command: 'list',
	describe: 'Print all notes',
	handler() {
		console.log("list")
	}
})

yargs.parse()