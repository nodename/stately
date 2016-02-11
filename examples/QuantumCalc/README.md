# QuantumCalc

[![Circle CI](https://circleci.com/gh/glassplan/glass.svg?style=svg&circle-token=87e63de595c9f6bc7bf37ecf03ae970fe8530e06)](https://circleci.com/gh/glassplan/glass)

## Requirements

* Java 1.8
* Leiningen 2.5.3
* Xcode 7.1
* CocoaPods

## Setup

* `npm install`
* `cd ios; pod install`

## Development

**1. Start Figwheel:**

From the command line:

* `make fig`

From Emacs:

* `cider-jack-in`
* open `src/common/dev.clj`
* `cider-load-buffer`
* evaluate `(start)`

**2. Launch the app:**

With Xcode:

* `open ios/GlassPlanner.xcworkspace`
* Product > Run

From the command line:

* We're unable to do this from the command line.
* It looks like Apple does not want us to.

## Testing

From the command line:

* `lein doo phantom test once` or `make test`

