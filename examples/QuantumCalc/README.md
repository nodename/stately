# QuantumCalc

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

* `open ios/QuantumCalc.xcodeproj`
* Product > Run

The app will run in the simulator.

From the command line:

* We're unable to do this from the command line.
* It looks like Apple does not want us to.

## Testing

From the command line:

* `lein doo phantom test once` or `make test`

