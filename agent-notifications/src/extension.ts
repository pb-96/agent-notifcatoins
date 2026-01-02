
import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "agent-notifications" is now active!');
	const disposable = vscode.commands.registerCommand('agent-notifications.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from agent-notifications!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
