# Stately project conventions

## Clojure style

Function argument vectors always go on the line after `defn`/`defn-`, indented two spaces:

```clojure
; correct
(defn foo
  [x y z]
  body)

; wrong
(defn foo [x y z]
  body)
```

This applies to all arities, metadata annotations, and docstrings:

```clojure
(defn ^:export init
  []
  ...)

(defn my-fn
  "docstring"
  [x]
  ...)
```
