"use strict";
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let Guest_name = ['Quaid e Azam', 'Imran Khan', 'Nawaz Shareef'];
let i;
{
    for (i = 0; i < Guest_name.length; i++)
        console.log('Dear Mr.' + Guest_name[i] + '.\nyou are invited to dinner. Please join us.\nThank you!\n');
}
