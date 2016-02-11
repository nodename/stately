# figwheel

# first run fig in one terminal:

fig:
	rlwrap lein figwheel


# packager in another terminal:

packager:
	react-native start


# then launch the app using Xcode.






# run the ClojureScript tests:

test:
	lein doo phantom test once

.PHONY: test






run-objc-tests: build-js bundle build-and-run-on-sim

build-js:
	lein cljsbuild once dev

bundle:
	react-native bundle --entry-file index.ios.js --platform ios --bundle-output ios/main.jsbundle

build-and-run-on-sim:
	xcodebuild \
	-project ios/GlassPlanner.xcodeproj \
	-scheme GlassPlanner \
	-destination platform='iOS Simulator',OS=9.1,id=1C1601B6-986A-4CB6-ADBF-988E6DE7A65B \
	test
