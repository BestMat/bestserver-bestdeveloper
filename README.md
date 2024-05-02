![image](https://github.com/BestMat/bestserver-bestdeveloper/assets/76582849/cf22b991-2309-4481-adb7-c724c2b02736)
<h1 align="center">
  <kbd>
    <img src="https://skillicons.dev/icons?i=java"/>
  </kbd>
  BestServer - BestDeveloper
  <kbd>
    <img src="https://skillicons.dev/icons?i=java"/>
  </kbd>
</h1>

<p align="center">
  <b>Made With: </b>
  <kbd>
    <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" />
  </kbd>

  <kbd>
    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
  </kbd>

  <kbd>
    <img src="https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white" />
  </kbd>

  <kbd>
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
  </kbd>
</p>

<p align="center">
  <b>★ Build amazing servers and applications with BestServer. ★</b>
</p>

## Source Code:
```java
// © 2024 - BestDeveloper - BestMat, Inc. - All rights reserved.
package com.bestmat.bestserver;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.util.HashMap;
import java.util.Map;

import java.io.*;
import java.net.URLDecoder;

public class Server {
    private HttpServer server;
    public Map <String, HttpHandler> routes;

    public Server (int port) throws IOException {
        server = HttpServer.create(new InetSocketAddress(port), 0);
        routes = new HashMap<>();
    }

    public void createContext(String path, HttpHandler handler) {
        server.createContext(path, handler);
    }

    public void get(String path, HttpHandler handler) {
        routes.put(path, handler);
    }

    public void start(String res) {
        for (Map.Entry<String, HttpHandler> entry : routes.entrySet()) {
            server.createContext(entry.getKey(), entry.getValue());
        }

        server.start();
        System.out.println("BestServer: " + res);
    }

    public int port() {
        return server.getAddress().getPort();
    }

    public void stop() {
        server.stop(0);
        System.out.println("BestServer: Server stopped");
    }

    public static class StaticFileHandler implements HttpHandler {
        private String rootDirectory;

        public StaticFileHandler(String rootDirectory) {
            this.rootDirectory = rootDirectory;
        }

        @Override
        public void handle(HttpExchange exchange) throws IOException {
            System.out.println("hello");
            String requestMethod = exchange.getRequestMethod();
            if (!requestMethod.equalsIgnoreCase("GET")) {
                exchange.sendResponseHeaders(405, -1);
                exchange.close();

                return;
            }

            String requestedPath = exchange.getRequestURI().getPath();
            String filePath = rootDirectory + URLDecoder.decode(requestedPath, "UTF-8");

            File file = new File(filePath);

            if (!file.exists() || !file.isFile()) {
                System.out.println("BestServer: File not found: " + filePath);
                exchange.sendResponseHeaders(404, -1);
                exchange.close();
                return;
            }

            String contentType = getContentType(filePath);
            exchange.getResponseHeaders().set("Content-Type", contentType);

            exchange.sendResponseHeaders(200, file.length());

            try (OutputStream os = exchange.getResponseBody();
                 FileInputStream fis = new FileInputStream(file)) {
                byte[] buffer = new byte[1024];
                int bytesRead;
                while ((bytesRead = fis.read(buffer)) != -1) {
                    os.write(buffer, 0, bytesRead);
                }
            }
        }

        private String getContentType(String filePath) {
            if (filePath.endsWith(".js")) { // JavaScript File
                return "application/javascript";
            } else if (filePath.endsWith(".jsx")) { // JavaScript JSX (React JS) File
                return "application/javascript";
            } else if (filePath.endsWith(".cjs")) { // JavaScript Common JS File
                return "application/javascript";
            } else if (filePath.endsWith(".html") || filePath.endsWith(".htm")) { // HTML File
                return "text/html";
            }  else if (filePath.endsWith(".css")) { // CSS File
                return "text/css";
            } else if (filePath.endsWith(".png")) { // PNG File
                return "image/png";
            } else if (filePath.endsWith(".jpg") || filePath.endsWith(".jpeg")) { // JPEG File
                return "image/jpeg";
            } else if (filePath.endsWith(".gif")) { // GIF File
                return "image/gif";
            } else if (filePath.endsWith(".vue")) {
                return "text/x-vue"; // Vue JS File
            } else if (filePath.endsWith(".svelte")) {
                return "text/html"; // Svelte and Svelte Kit File
            } else {
                return "application/octet-stream";
            }
        }

        /* Example for Static File Handler: (with StaticFileRoutes New Class)
            import java.io.IOException;

            public class StaticFileRoutes {
                public static void configureRoutes(SimpleHttpServer server) {
                    // Serve static files from the "static" directory
                    server.addRoute("/static/*", new StaticFileHandler("/path/to/static/directory"));
                }

                public static void main(String[] args) throws IOException {
                    SimpleHttpServer httpServer = new SimpleHttpServer(8000);
                    configureRoutes(httpServer);
                    httpServer.start();
                }
            }
        */
    }

    public static void main(String[] args) {
        try {
            int port = 8000;
            Server server = new Server(port);

            server.createContext("/", new ServerHandler());

            server.start("Server running on Port " + Integer.toString(port));
        } catch (IOException error){
            error.printStackTrace();
        }
    }

    static class ServerHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange t) throws IOException {
            String response = "Nagapillaiyar";

            t.sendResponseHeaders(200, response.length());
            OutputStream os = t.getResponseBody();

            os.write(response.getBytes());
            os.close();
        }
    }
}
```

***
