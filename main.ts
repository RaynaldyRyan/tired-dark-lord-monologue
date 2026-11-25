// The Tired Dark Lord: A 100-Word Villain Monologue
// Sarn, collector of the tomb-tax. The war is already won; he is waiting on
// one heir's signature to legalise the dead. The tiredness lives in the
// restarts, the corrections, and the small deflections — never in saying so.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MONOLOGUE =
  "Sit. No—not there. That chair holds the ledger, and the ledger holds your father. " +
  "Three wars, one famine, and the dead still owe. I only collect. The dead pay in heirs. " +
  "One signature, and the tombs are yours. " +
  "The wax is— the wax is warm. I kept it warm. That is the trick: nobody waits for wax. " +
  "Sign here. Here. Under your father’s name. " +
  "The north road, the tolls, the winter grain, all yours. All— mine, until the ink dries. " +
  "And when it does. When it does, you may bury me beside him. " +
  "I picked the stone. It says: paid in full.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MONOLOGUE, "utf8");
