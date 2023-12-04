
import championsJson from './champions.json';


const data = Object.values(championsJson.data).map(champion => ({
  id: champion.id,
  name: champion.name,
  title: champion.title,
  roles: champion.tags,
  difficulty: champion.info.difficulty,
  lore: champion.blurb,
  abilities: champion.spells.map(spell => spell.name),
  image: {
    full: champion.image.full,
    sprite: champion.image.sprite,
    group: champion.image.group,
    x: champion.image.x,
    y: champion.image.y,
    w: champion.image.w,
    h: champion.image.h,
  },
  stats: {
    hp: champion.stats.hp,
    hpperlevel: champion.stats.hpperlevel,
    mp: champion.stats.mp,
    mpperlevel: champion.stats.mpperlevel,
    movespeed: champion.stats.movespeed,
    armor: champion.stats.armor,
    armorperlevel: champion.stats.armorperlevel,
    spellblock: champion.stats.spellblock,
    spellblockperlevel: champion.stats.spellblockperlevel,
    attackrange: champion.stats.attackrange,
    hpregen: champion.stats.hpregen,
    hpregenperlevel: champion.stats.hpregenperlevel,
    mpregen: champion.stats.mpregen,
    mpregenperlevel: champion.stats.mpregenperlevel,
    crit: champion.stats.crit,
    critperlevel: champion.stats.critperlevel,
    attackdamage: champion.stats.attackdamage,
    attackdamageperlevel: champion.stats.attackdamageperlevel,
    attackspeedperlevel: champion.stats.attackspeedperlevel,
    attackspeed: champion.stats.attackspeed,
  },
}));

export default data;
