const jq = require('node-jq');

const app = async () => {
  // jq.run('.', { foo: 'bar' }, { input: 'json' }).then(console.log);

  // // const filter = 'del(.[].department.sdfErp)';
  // // const filter = '.[].sku';
  // const filter = '.[].sku';
  // const jsonPath = 'products.json';
  // const options = {};

  // jq.run(filter, jsonPath, options)
  //   .then(result => {
  //     const items = String(result).split('\n');
  //     console.log(
  //       `items`,
  //       items.filter(item => String(item).includes('-CX')).length
  //       // typeof items
  //     );
  //   })
  //   .catch(console.error);

  const filter = 'del(.[].department.sdfErp)';
  const jsonPath = 'files/products.json';
  const options = { output: 'json' };

  try {
    const result = await jq.run(filter, jsonPath, options);

    console.log(
      'result',
      // result[0]
      result.filter(item => String(item.sku).includes('-CX')).length
    );
  } catch (error) {
    console.error(error);
  }
};

app();
