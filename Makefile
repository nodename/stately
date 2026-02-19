NPM = npm
NPMX = $(NPM) exec --
SHADOW = $(NPMX) shadow-cljs


watch: 
	@echo "Using env var TFR_DEV=${TFR_DEV}"
	$(SHADOW) watch app

