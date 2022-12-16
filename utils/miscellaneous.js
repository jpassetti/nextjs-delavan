export const getSingularOrPluralText = ( count, text ) => {
    return 1 < count ? `${text}s` : text;
  };