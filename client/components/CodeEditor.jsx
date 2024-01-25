import { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';
import { MonacoLanguageClient } from 'monaco-languageclient';
import { w3cwebsocket } from 'websocket';


// ! This component won't render anything and through 107 errors when running the app on dev env.
const CodeEditor = () => {
    const editorRef = useRef(null);

    useEffect(() => {
        // Create the Monaco editor instance
        editorRef.current = monaco.editor.create(document.getElementById('editor'), {
            value: '',
            language: 'javascript',
        });

        // Connect to the server using web sockets
        const socket = new w3cwebsocket('ws://your-server-url');

        // Create the Monaco Language Client
        const languageClient = new MonacoLanguageClient({
            clientOptions: {
                documentSelector: ['javascript'],
                synchronize: {
                    configurationSection: 'languageServerExample',
                },
            },
            webSocket: socket,
        });

        // Start the language client
        languageClient.start();

        return () => {
            // Clean up the editor and language client
            editorRef.current.dispose();
            languageClient.stop();
        };
    }, []);

    return <div id="editor" style={{ width: '100%', height: '400px' }} />;
};

export default CodeEditor;
