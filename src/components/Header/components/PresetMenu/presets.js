const presets = [
  {
    label: "Basic",
    url: ``,
  },
  {
    label: "Basic (Typescript)",
    url: `?html=DwQgIg8gwgKgmgBQKIAIAWAXAtgGwHwBQwmuhK5KxApgIYAmZFFBTTwAVgM4BGAHgLQBjTp0atKIfvxQAhGtyo4UAMwD2AJxQwAngAcqnQeoCWujCk4BXXbo3mpY1sEMmzF9YIC8AIkwZdnABcAPTBlgB2ugDWAOYAdIKqWMEAAtzyisGcGDThdDQ4quFUwekKOHFYxuFxXN4oRqoiGsYx1XjAWUamGI5MLBSdaLQMA%2BTA3Kp02n2DXHz8XCgYelQ%2BGFS8GKUZOPW66gZUGJzrqy493o6dk9OEQ9j4QA&lefttab=BYFwtgNkA&jssuperset=C4TwDgpgzgxgTgSzMIA`,
  },
  {
    label: "React v17",
    url: `?html=DwQgIg8gwgKgmgBQKIAIAWAXAtgGwHwBQwmuhK5KxApgIYAmZFTwWVGNKAxmjQE4DObALwAiAKowAYgFoAHCMZNyLNhwB2NVqIBuASyoB3AA4B7XhhFcTajFRuiDuuhjRC6VPZyrTHztABoUXTVdDF0aHGl%2BTgiqIQBGADoABgUCJQpgMIwcKjwAJVpODBQEHBoATwBzXhMAVzU6YAB6bNzFJWAAK34AIwAPaU5%2Bfg7mEGlpFEKaYpQaRumijEgAWRQAM1qsFCgwADkUSbHM6N5dIxL%2BXk5RTAwjfgAuZuaGowBrKsTOEyxm3jLAAC8QA7ClEgAmN5YOgA5aJdzaKg4ExGVg2RI9SycWojMy6KrBPAtM4XDAnZRky4oa63ET3R4vN5qT7fX7-QGzDDSOh-EHg5JQmFwrnFXl-REeFFojEYLH8HF4-gEolqEnNakUgjpDKUCZTABCNF6KM2ZhQACkAMoADVpdSMpnMR2klMoWtpNzuGAez1e7y%2BPz%2BzSBvRNKM17EaEWsVGa4dNOESWGCCqVJnx5zVGq17t1ymaaFoDALlF6JjoFXdwDoum0QToolqJgsGrr2hrPQG0h6KAwFSMcREtn6GATEZwliMgMEGH4zeWaWYCcr1aIRew%2BAIQA&lefttab=FYZyA&jssuperset=FYQwbiDODGBOCWAHALkA&js=MYewdgzgLgBA3jASgUwIbCgGiWjARAeQFkYBfGAXhgHcBLMAExGoG4BYAKFElgQFcIyAMpRUUZGUo50Udh04AzPmAy1wMAIIAHLQAoAlPE4wYxmACdkUPubAxdZkyYA8DWgDcAfI6e%2BAKgAWtBAwwTAAtgCe0hiaOgA2tMBiamA%2BLgD0bl6cAJD6cqScnBkZOIzI5jBQARLaWjAAwiDhWuDIYFCcKDKERAB0lhXmus71MBme2EzAfOEdUP0A5lYAovHI850AQpEAkgy6AOTmICBQR-oFQA`,
  },
  {
    label: "React 17 (Typescript)",
    url: `?html=DwQgIg8gwgKgmgBQKIAIAWAXAtgGwHwBQwmuhK5KxApgIYAmZFTwWVGNKAxmjQE4DObALwAiAKowAYgFoAHCMZNyLNhwB2NVqIBuASyoB3AA4B7XhhFcTajFRuiDuuhjRC6VPZyrTHztABoUXTVdDF0aHGl%2BTgiqIQBGADoABgUCJQpgMIwcKjwAJVpODBQEHBoATwBzXhMAVzU6YAB6bNzFJWAAK34AIwAPaU5%2Bfg7mEGlpFEKaYpQaRumijEgAWRQAM1qsFCgwADkUSbHM6N5dIxL%2BXk5RTAwjfgAuZuaGowBrKsTOEyxm3jLAAC8QA7ClEgAmN5YOgA5aJdzaKg4ExGVg2RI9SycWojMy6KrBPAtM4XDAnZRky4oa63ET3R4vN5qT7fX7-QGzDDSOh-EHg5JQmFwrnFXl-REeFFojEYLH8HF4-gEolqEnNakUgjpDKUCZTABCNF6KM2ZhQACkAMoADVpdSMpnMR2klMoWtpNzuGAez1e7y%2BPz%2BzSBvRNKM17EaEWsVGa4dNOESWGCCqVJnx5zVGq17t1ymaaFoDALlF6JjoFXdwDoum0QToolqJgsGrr2hrPQG0h6KAwFSMcREtn6GATEZwliMgMEGH4zeWgQHQ61aWYCcr1aIRew%2BAIQA&lefttab=FYZyA&jssuperset=C4TwDgpgzgxgTgSzMIA&js=MYewdgzgLgBA3jASgUwIbCgGiWjARAeQFkYBfGAXhgHcBLMAExGoG4BYAKFElgQFcIyAMpRUUZGUo50Udh04AzPmAy1wMAIIAHLQAoAlPE4wYxmACdkUPubAxdZkyYA8DWgDcAfI6e%2BAKgAWtBAwwTAAtgCe0hiaOgA2tMBiamA%2BLgD0bl6cAJD6cqScnBkZOIzI5jBQARLaWjAAwiDhWuDIYFCcKDKERAB0lhXmus71MBme2EzAfOEdUP0A5lYAovHI850AQpEAkgy6AOTmICBQR-oFQA`,
  },
  {
    label: "React v18",
    url: `?html=DwQgIg8gwgKgmgBQKIAIAWAXAtgGwHwBQwmuhK5KxApgIYAmZFTwWVGNKAxmjQE4DObALwAiAKowAYgFoAHCMZNyLNhwB2NVqIBuASyoB3AA4B7XhhFcTajFRuiDuuhjRC6VPZyrTHztABoUXTVdDF0aHGl%2BTgiqIQBGADoABgUCJQpgMIwcKjwAJVpODBQEHBoATwBzXhMAVzU6YAB6bNzFJWAAK34AIwAPaU5%2Bfg7mEGlpFEKaYpQaRumijEgAWRQAM1qsFCgwADkUSbHM6N5dIxL%2BXk5RTAwjfgAuZuaGowBrKsTOEyxm3jLAAC8VkbywdABy0S7m0VBwJiMrBsiR6lk4tRGZl0VWCeBaZwuGBOykJlxQ11uInujxebzUn2%2Bv3%2BgNmGGkdD%2BILBdQhULZHL%2BMI88MRyIwqP46Mx-GxuLU%2BOaZOJBHSGUoEymACEaL14ZszCgAFIAZQAGhS6kZTOYjtISZRlRSbncMA9nq93l8fn9mkDerr4Ur2I0ItYqM0A3qcIksMFJdKTFjzvLFcqHWrlM00LQGJnKL0THQKg7gHRdNognRRLUTBZFeXtKWegNpD0UBgKkY4iJbP0MJHAzhLEZAYIMPwa8s0sxI0WS0Rs9h8EA&lefttab=FYZyA&jssuperset=FYQwbiDODGBOCWAHALkA&js=MYewdgzgLgBA3jASgUwIbCgGiWjARAeQFkYBfGAXhgHcBLMAExGoG4BYAKFElgQFcIyAMpRUUZGUo50Udh04AzPmAy1wMAIIAHLQAoAlPE4wYxmACdkUPubAxdZkyYA8DWgDcAfI6e%2BAKgAWtBAwwTAAtgCe0hiaOgA2tMBiamA%2BLgD0bl6cAJD6cqScnBkZOIzI5jBQARLaWjAAwiDhWuDIYFCcKDKERAB0wJZiyIggIFC6TMB84R1Q-QDmVgCi8chznQBCkQCSDLoA5ObjUIf6%2Bv2WFea6zvUwGZ4FQA`,
  },
  {
    label: "React v18 (Typescript)",
    url: `?html=DwQgIg8gwgKgmgBQKIAIAWAXAtgGwHwBQwmuhK5KxApgIYAmZFTwWVGNKAxmjQE4DObALwAiAKowAYgFoAHCMZNyLNhwB2NVqIBuASyoB3AA4B7XhhFcTajFRuiDuuhjRC6VPZyrTHztABoUXTVdDF0aHGl%2BTgiqIQBGADoABgUCJQpgMIwcKjwAJVpODBQEHBoATwBzXhMAVzU6YAB6bNzFJWAAK34AIwAPaU5%2Bfg7mEGlpFEKaYpQaRumijEgAWRQAM1qsFCgwADkUSbHM6N5dIxL%2BXk5RTAwjfgAuZuaGowBrKsTOEyxm3jLAAC8VkbywdABy0S7m0VBwJiMrBsiR6lk4tRGZl0VWCeBaZwuGBOykJlxQ11uInujxebzUn2%2Bv3%2BgNmGGkdD%2BILBdQhULZHL%2BMI88MRyIwqP46Mx-GxuLU%2BOaZOJBHSGUoEymACEaL14ZszCgAFIAZQAGhS6kZTOYjtISZRlRSbncMA9nq93l8fn9mkDerr4Ur2I0ItYqM0A3qcIksMFJdKTFjzvLFcqHWrlM00LQGJnKL0THQKg7gHRdNognRRLUTBZFeXtKWegNpD0UBgKkY4iJbP0MJHAzhLEZAYIMPwa8tAp3u8q0sxI0WS0Rs9h8EA&lefttab=FYZyA&jssuperset=C4TwDgpgzgxgTgSzMIA&js=MYewdgzgLgBA3jASgUwIbCgGiWjARAeQFkYBfGAXhgHcBLMAExGoG4BYAKFElgQFcIyAMpRUUZGUo50Udh04AzPmAy1wMAIIAHLQAoAlPE4wYxmACdkUPubAxdZkyYA8DWgDcAfI6e%2BAKgAWtBAwwTAAtgCe0hiaOgA2tMBiamA%2BLgD0bl6cAJD6cqScnBkZOIzI5jBQARLaWjAAwiDhWuDIYFCcKDKERAB0wJZiyIggIFC6TMB84R1Q-QDmVgCi8chznQBCkQCSDLoA5ObjUIf6%2Bv2WFea6zvUwGZ4FQA`,
  },
];

const generatePresets = () => {
  return presets.map((preset) => {
    return {
      ...preset,
      url: `${process.env.REACT_APP_BASE_URL}/#/${preset.url}`,
    };
  });
};

export default generatePresets();
