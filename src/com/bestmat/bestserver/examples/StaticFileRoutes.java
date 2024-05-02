// © 2024 - BestDeveloper - BestMat, Inc. - All rights reserved.
package com.bestmat.bestserver.examples;

import com.bestmat.bestserver.Server;
import com.bestmat.bestserver.Server.StaticFileHandler;
import java.io.IOException;

public class StaticFileRoutes {
    public static void configureRoutes(Server server) {
        // Serve static files from the "static" directory
        server.get("/static/*", new StaticFileHandler("/Users/tayoyuva/Documents/Mine/bestmat-nagapillaiyarsai/bestdeveloper-bestmat/bestserver-dev/src/com/bestmat/bestserver/examples/static"));
    }

    public static void main(String[] args) throws IOException {
        Server httpServer = new Server(8000);
        configureRoutes(httpServer);
        httpServer.start("Server for StaticFileRoutes Example running on Port 8000.");
    }
}