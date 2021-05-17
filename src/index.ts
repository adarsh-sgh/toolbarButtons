import joplin from 'api';
import { ToolbarButtonLocation } from 'api/types';

joplin.plugins.register({
	onStart: async function () {
		joplin.commands.register({
			name: 'strikeCommand',
			label: 'strike the selection',
			iconName: 'fas fa-strikethrough',
			execute: () => new Promise((resolve, reject) => {
				const selectedText = joplin.commands.execute('selectedText');
				selectedText.then(selection => { joplin.commands.execute('replaceSelection', `~~${selection}~~`) });
				resolve(1);
			})
		})
		joplin.views.toolbarButtons.create('strikeThrough', 'strikeCommand', ToolbarButtonLocation.EditorToolbar)
	},
});
