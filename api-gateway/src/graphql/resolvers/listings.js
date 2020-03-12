const listingsResolver = async (root, args, context) => {
  return [
    {
      id: 1,
      title: 'test',
      description: 'test description',
    },
  ];
};

export default listingsResolver;
