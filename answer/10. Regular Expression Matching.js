/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  console.log("---------init:", s, p);
  let sIdx = 0,
    pIdx = 0;
  while (pIdx < p.length) {
    let _s = s[sIdx],
      _p = p[pIdx];
    if (!_s) {
      let remain_p = p.slice(pIdx);
      if (
        remain_p.split("").some((pp, ii) => {
          return pp != "*" && remain_p[ii + 1] != "*";
        })
      )
        return false;
      else return true;
    }
    console.log("comparing:", sIdx, _s, pIdx, _p);
    if (p[pIdx + 1] === "*") {
      console.log("foundNext is *!!");
      let s_skip = 0,
        p_skip = 0;
      if (_p === ".") {
        pIdx += 2;
        if (pIdx == p.length) return true;
        let new_s = s.slice(sIdx),
          new_p = p.slice(pIdx);
        if (
          new_p
            .split("")
            .every((pp, ii) => pp == "*" || (pp != "*" && new_p[ii + 1] == "*"))
        ) {
          return true;
        }
        let rr = new_s.split("").some((ss, ii) => {
          console.log("testing:", new_s.slice(ii), new_p);
          return isMatch(new_s.slice(ii), new_p);
        });
        console.log("rr:", rr);
        return rr;
      } else {
        while (s[sIdx + s_skip] == _p && sIdx + s_skip < s.length) {
          s_skip++;
        }
        pIdx += 2;
        if ((sIdx + s_skip >= s.length && pIdx < p.length) || true) {
          console.log("p Has remain!!");
          let new_s = s.slice(sIdx),
            new_p = p.slice(pIdx);
          if (
            new_p
              .split("")
              .every(
                (pp, ii) => pp == "*" || (pp != "*" && new_p[ii + 1] == "*")
              )
          ) {
            return true;
          }
          return new_s.split("").some((ss, ii) => {
            console.log("testing:", new_s.slice(ii), new_p);
            return isMatch(new_s.slice(ii), new_p);
          });
        }
        sIdx += s_skip;
        let real_p_skip = 0;
        while (
          p[pIdx + p_skip] === _p ||
          (p[pIdx + p_skip - 1] === _p && p[pIdx + p_skip] == "*")
        ) {
          if (p[pIdx + p_skip] == _p && p[pIdx + p_skip + 1] != "*") {
            real_p_skip++;
          }
          p_skip++;
        }
        console.log("real_p_skip:", real_p_skip);
        console.log("s:", s_skip, "p:", p_skip);
        if (real_p_skip > s_skip) return false;
        pIdx += p_skip;
      }
    } else if (_s === _p || _p == ".") {
      pIdx++;
      sIdx++;
    } else {
      console.log("found Diff");
      return false;
    }
  }
  console.log(sIdx, s.length, pIdx, p.length);
  if (sIdx == s.length && pIdx === p.length) return true;
  else return false;
};

// (s = "aa"), (p = "a");

s = "bbcacbabbcbaaccabc";
p = "b*a*.c*bb*.*";
console.log(isMatch(s, p));
