{
  // interface generic

  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
  }

  const user: Developer<> = {
    name: "zubair",
    computer: {
      brand: "asd",
      module: "live",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "apple",
      model: "X-mel",
    },
  };

  const user2: Developer<> = {
    name: "zubair khan",
    computer: {
      brand: "ReadMe",
      module: "live-009",
      releaseYear: 2030,
    },
    smartWatch: {
      brand: "apple watch ",
      model: "X-mel",
    },
  };

  //
}
