export const suburbs = [
    "Albert Park", "Balaclava", "Bayswater", "Bentleigh", "Bentleigh East", "Berwick",
    "Box Hill", "Brighton", "Burwood", "Camberwell", "Caulfield", "Chadstone",
    "Cheltenham", "Clayton", "Cranbourne", "Dandenong", "Doncaster", "Elsternwick",
    "Endeavour Hills", "Ferntree Gully", "Frankston", "Glen Iris", "Glen Waverley",
    "Hampton", "Hawthorn", "Kew", "Keysborough", "Knoxfield", "Lysterfield",
    "Malvern", "Malvern East", "Melbourne CBD", "Mentone", "Moorabbin", "Mount Waverley",
    "Mulgrave", "Narre Warren", "Noble Park", "Oakleigh", "Pakenham", "Prahran",
    "Richmond", "Ringwood", "Rowville", "Sandringham", "Scoresby", "Seaford",
    "South Yarra", "Springvale", "St Kilda", "Toorak", "Wantirna", "Wheelers Hill"
].sort();

export const formatSuburbSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-');
};
