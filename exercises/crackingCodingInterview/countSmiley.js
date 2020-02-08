const countSmileys = ss =>
  ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);
