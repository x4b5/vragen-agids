/**
 * Optionele handgeschreven reflecties per stelling, gebruikt op het conversie-scherm.
 *
 * De stellingen in questions-v10.ts zijn fragmenten in de "dat ik..."-vorm
 * (bijv. "ik hulp kan krijgen met formulieren en brieven van de gemeente").
 * Standaard spiegelt het scherm ze terug als "Ik vind het belangrijk dat ...".
 *
 * Wil je voor een specifieke vraag een mooiere, persoonlijke zin tonen, voeg
 * die dan hier toe. Key = vraag-id (v10-x). Ontbreekt een id, dan gebruikt het
 * scherm automatisch de standaard "Ik vind het belangrijk dat ..."-zin.
 */
export const reflectionsV10: Record<string, string> = {};
