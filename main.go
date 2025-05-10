package main

// User →  Server listens →  Mux finds correct handler →  Handler sends HTML/CSS/images →  User

import (
	"fmt"
	"net/http"
)

type welcome string

// handler interface
func (wc welcome) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Welcome to my server!")
}

// handler function
func gallery(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Photo gallery!")
}

func main() {
	// router
	router := http.NewServeMux()

	// handler
	var wc welcome
	router.Handle("/", wc)

	// handler funcs
	router.HandleFunc("/gallery", gallery)

	// server
	server := http.Server{
		Addr:    ":8080",
		Handler: router,
	}

	// run server
	server.ListenAndServe()
}
