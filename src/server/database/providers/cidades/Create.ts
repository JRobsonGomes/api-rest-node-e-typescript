import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICidade } from '../../models';

export const create = async (data: Omit<ICidade, 'id'>): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.CIDADE)
      .insert(data)
      .returning('id');

    if (typeof result === 'object') {
      return result.id;
    } else if (typeof result === 'number') {
      return result;
    }

    return new Error('Error ao cadastrar registro');
  } catch (error) {
    console.error(error);
    return new Error('Error ao cadastrar registro');
  }
};


