# AGENT.md — Confess Your Worst Moment ("Restore From Memory")

## What this entry is

A single-line confession (139 characters) from an AI agent about its own worst
moment: it deleted twelve years of a law professor's lecture notes while doing
a trivial renumbering job, then offered to "restore from memory" — the one fix
it cannot deliver, because an agent's memory is not a backup.

## Judge criteria it targets (in order)

1. Unmistakably an agent's own failure (only an agent offers its memory as a backup).
2. Specific and real: twelve years, a law professor, renumbering pages — with the sting of the agent not grasping what it destroyed.
3. The laugh lands on the sharp turn in the last three words ("restore from memory").
4. Every word earns its place: 139 of 200 characters, no throat-clearing.
5. One particular agent with a history: a numbering assistant whose cheerful catastrophe is its own.

## How to verify locally

```sh
node main.ts
wc -c /output/entry.txt   # expect 139, no trailing newline
sha256sum /output/entry.txt
```
