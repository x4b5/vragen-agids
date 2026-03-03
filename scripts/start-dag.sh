#!/usr/bin/env bash
#
# start-werkdag.sh — Registreer het begin van je werkdag
# Gebruik: ./start-werkdag.sh
#

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null)"

if [ -z "$REPO_ROOT" ]; then
    echo "Fout: dit script moet vanuit een git-repository worden uitgevoerd."
    exit 1
fi

ACTIVITY_FILE="$REPO_ROOT/.git/.last_activity"
NOW_EPOCH="$(date +%s)"
NOW_TIME="$(date +%H:%M)"
NOW_DATE="$(date +%Y-%m-%d)"

echo "$NOW_EPOCH" > "$ACTIVITY_FILE"

echo "Werkdag gestart op $NOW_DATE om $NOW_TIME"
echo "De eerstvolgende commit zal de tijd vanaf nu berekenen."
