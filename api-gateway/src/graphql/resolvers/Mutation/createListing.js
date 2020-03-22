import ListingsService from '#root/adapters/ListingsService';

const createListingsResolver = async (_, { title, description }, context) => {
  if (!context.res.locals.userSession) throw new Error('You are not Logged In');
  const newListing = await ListingsService.addListing({ title, description });
  return newListing;
};

export default createListingsResolver;
