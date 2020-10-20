const parameters = {
    "QUALITY": [
        "sehr gut",
        "gut",
        "schlecht",
        "sehr schlecht"
    ],
    "DESIGN": [
        "Die Metaanalyse, die",
        "Das Laborexperiment, das",
        "Die Studie, die"
    ],
    "FORMAT": [
        "in einem englischsprachigen Journal publiziert",
        "auf einer englischsprachigen Konferenz pr\u00e4sentiert"
    ],
    "IMPORTANCE": [
        "extrem wichtig",
        "wichtig",
        "unwichtig",
        "extrem unwichtig"
    ],
    "SAMPLESIZE": [
        "4",
        "14",
        "40"
    ],
    "STATISTICS": [
        "angemessenen statistischen Verfahren",
        "nicht angemessenen statistischen Verfahren"
    ]
}


const sentences = ["DESIGN FORMAT wurde, wurde von Wissenschaftlern aus dem Bereich als IMPORTANCE eingeschätzt.",
              "Die von Wissenschaftlern aus demselben Forschungsbereich als methodisch QUALITY eingeschätzte Studie, die an SAMPLESIZE Probanden durchgeführt wurde, wurde mit einem laut unserem Experten STATISTICS ausgewertet."];


function func(a, b) {
    return 0.5 - Math.random();
}
