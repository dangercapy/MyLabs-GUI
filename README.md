<html>
    <header>
        <h1>MyLabs-GUI</h1>
        <h5>A simplified webpage for checking the status of your servers.</h5>
    </header>
    <body>
        <h4>Documentation</h4>
        <h5>What does it do?</h5>
        <p>MyLabs GUI picks up the API from MyLabs to convert it into a conventional webpage, where you can see the status of your selected host through a dot changing color. (red=offline, green=online).</p>
        <h5>Setting up mylabs:</h5>
        <p>The process of setting it up is pretty simple, in index.js file, you change the text "apihost", to the prefix/ip/url of where your MyLabs instance is hosted. Unsure what to use? Run MyLabs via docker via docker run (image name of your builded docker image), and you will see something like: Server is running on http://192.168.178.100:8000, this means the the prefix is http://, the IP/URL of your device is 192.168.178.110, and the port is 8000. You also should add the : between the IP and the port.
    <footer>
        <p>Made by dangercapy</p>
    </footer>
</html>
