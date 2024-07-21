const addrs = [
  "0x48390752a6c1ED8d5d25bDe85c0756DE2b85F278",
  "0xFA523EA3100f1BdC018b15b81A90eB79FFED01E5",
  "0x856205fddE2c5e7659685e91E4fbA64a240A929f",
  "0x6C5a693494f87B628a3cC79F9e7c68A64bB4956C",
  "0x49a8AFbA3cFa6529Eda53cc8567a64EBf550415f",
  "0x9a39c478e6b56e23e1eDf0E9E199BB3A7F1EDB8B",
  "0xFf9c8F00015d69D91CF148B04Ca4daeFf2cb0657",
  "0x750ea382F49962AD58047955d410990da509cE19",
  "0xc63b87604408361963C5CE3EF086EFa53F59ff3c",
  "0xaD1C1502329EfdDe9194e5567648218D57E22e70",
  "0x3E4Ce44C575D427fc2970C76E07Fc925BfD31d08",
  "0xfCcBE1530827F3E069c82473ed9A87bce4800300",
  "0xD5A7c9c413a87aD5D669191CA1D6d91CAA59bf1a",
  "0xcE46520324b9275de5b5D16a46199eB28956B13C",
  "0x4221E9f7cdF4c11bef4742dA8B510fc35d7c6094",
  "0xd0B69FaFb114dd1035c274483745E390B1102628",
  "0x573741165f6c5Be4cb0083cdfDc1e030Ab6FEC65",
  "0x360C9c96cB4E3baf2e8BDaABD7261aCBea9fa952",
  "0xC979c2B43E5A83eECBb05BD96C8046134F43a27e",
  "0xCe54812b8C9661ff4EcDBB547E10C851E1871007",
  "0xdF85f03Badc992DfD54fc06AD4340fc57923b5a5",
  "0xb39e708D8A7F8c5Eafe1050a217174f66D107d6f",
  "0x43A38BdCB14A8278e98f04Ec637Eb12269Ac2E17",
  "0xac70Ccdc079b7d9E47AAd4fb3E13a88565916B69",
  "0x834d5d7eEB11325d98308e03C3E5A3dA823cE33C",
  "0x47f5B352764eF442037543459b112b9d20164775",
  "0xb262e88565858EA333354A1B9Ac12C9A73eb1ed1",
  "0x7737AbbA056b2E21f9Ee808b4f8e35a47C1309f6",
  "0x159609aFEa12461D57a400800eAc2Bd70A220Fa2",
  "0x9CE436Ea0cF6000856d5764c5eB921d1f73E0CA6",
  "0x23cE201Ef54027e3fe469A3d0d0EEbB63DCaA55B",
  "0xDfe52ADc1624d196114F2386E86ac9667bf7c8F5",
  "0x428b2A3BEDa7570A27Bf733569cc64cB93B94cbf",
  "0x2C10CeF180c22E179216CF87A665735b9a1b59c5",
  "0xfbCf7b54b460f5A9dF2C95777d4A4f408CF27d90",
  "0x056201aFe2698b77ad240F087711f327d2126518",
  "0x577Ee90857C800c7D8Df05f819D701F83544235F",
  "0xC06ac23D4aeFF713b5BfB4eAaE4c4D294BD67959",
  "0xeAbE97E48032F9cf49698ed4A0B9bb88aB1E75Ce",
  "0x695F79E34972915c849aF90FFb9a211BF603697f",
];

let orders = new Array(addrs.length).fill(0).map((_, i) => String(i));
const statuses = ["pending", "ongoing", "completed", "canceled"];

const pickMember = (arr) => arr[Math.floor(Math.random() * arr.length)];

const pickNum = (num) => Math.floor(Math.random() * num);

function pickNumInRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export const requests = addrs.map((_, index, arr) => {
  const addr = addrs[index];
  const duration = `${pickNum(24)} hours`;
  const status = pickMember(statuses);
  const price = pickNumInRange(-9999, 9999);

  return { addr, duration, status, price };
});
