import { Mob } from "../../sdk/Mob";
import { MeleeWeapon } from "../../sdk/weapons/MeleeWeapon";
import { GLTFModel } from "../../sdk/rendering/GLTFModel";
import { Assets } from "../../sdk/utils/Assets";

export class Yama extends Mob {
  override mobName() {
    return "Yama";
  }

  override get combatLevel() {
    return 1000;
  }

  override setStats() {
    this.weapons = {
      crush: new MeleeWeapon(),
    };

    this.stats = {
      attack: 150,
      strength: 150,
      defence: 150,
      range: 150,
      magic: 150,
      hitpoint: 500,
    };
    this.currentStats = JSON.parse(JSON.stringify(this.stats));
  }

  override get bonuses() {
    return {
      attack: {
        stab: 0,
        slash: 0,
        crush: 100,
        magic: 0,
        range: 0,
      },
      defence: {
        stab: 100,
        slash: 100,
        crush: 100,
        magic: 100,
        range: 100,
      },
      other: {
        meleeStrength: 50,
        rangedStrength: 0,
        magicDamage: 0,
        prayer: 0,
      },
    };
  }

  override get attackSpeed() {
    return 4;
  }

  attackStyleForNewAttack() {
    return "crush";
  }

  get attackRange() {
    return 1;
  }

  get size() {
    return 5;
  }

  create3dModel() {
    return GLTFModel.forRenderable(this, "assets/models/yama.glb");
  }
}
