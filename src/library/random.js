const adjectives = ["brown","crazy","awful","flying","concrete","timely","perfect","smart","awesome","comprehensible", "platinum", "golden"];
const nouns = ["squirrel","car","clover","plane","volcano","tortoise","table","house","lotus","guitar","daredevil","diamond", "experience", "star", "world"];

export function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);
    
    return `${adjectives[adjectiveIndex]}${nouns[nounIndex]}`;
};