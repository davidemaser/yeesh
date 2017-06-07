/**
 * Created by David Maser on 07/06/2017.
 */
export const objMapping = {
  objList : ['bind','eval','define','process','repeat','object','array','function','constant','var']
};
export const objConditions =
  {
    if: {
      calls: 'Condition.if',
      returns: 'boolean'
    },
    while: {
      calls: 'Condition.while',
      returns: 'object'
    },
    unless: {
      calls: 'Condition.unless',
      returns: 'object'
    }
  };