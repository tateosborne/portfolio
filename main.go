package main

// User →  Server listens →  Mux finds correct handler →  Handler sends HTML/CSS/images →  User

import (
	"fmt"
	"net/http"
)

type welcome string

func (wc welcome) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Welcome to my server!")
}

func main() {

	// handler
	var wc welcome

	// server
	server := http.Server{
		Addr:    ":8080",
		Handler: wc,
	}

	// run server
	server.ListenAndServe()
}
