import * as vscode from 'vscode';

export function isCursor(): boolean {
	const appName = vscode.env.appName || '';
	return appName.toLowerCase().includes('cursor');
};
