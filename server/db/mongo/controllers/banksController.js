import _ from 'lodash';
import Bank from '../models/banksModel';

/**
 * List
 */
export function all(req, res) {
  Bank.find({}).exec((err, banks) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }

    return res.json(banks);
  });
}

/**
 * Add a Bank
 */
export function add(req, res) {
  Bank.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return res.status(200).send('OK');
  });
}

/**
 * Update a topic
 */
export function update(req, res) {
  console.log("bankUpdate");
  const query = {
    id: req.params.id
  };
  const isIncrement = req.body.isIncrement;
  const isUpdateCards = req.body.isUpdateCards;
  const isFull = req.body.isFull;
  const omitKeys = ['id', '_id', '_v', 'isIncrement', 'isFull'];
  const data = _.omit(req.body, omitKeys);

  if (isFull) {
    Bank.findOneAndUpdate(query, data, (err) => {
      if (err) {
        console.log('Error on save!');
        return res.status(500).send('We failed to save for some reason');
      }

      return res.status(200).send('Updated successfully');
    });
  } else if (isUpdateCards) {
    debugger
    Bank.findOneAndUpdate(query, {
      $set: {
        cards: data.cards
      }
    }, (err) => {
      if (err) {
        console.log('Error on save!');
        return res.status(500).send('We failed to save for some reason');
      }

      return res.status(200).send('Updated successfully');
    });
  }
}

/**
 * Remove a topic
 */
export function remove(req, res) {
  const query = {
    id: req.params.id
  };
  Bank.findOneAndRemove(query, (err) => {
    if (err) {
      console.log('Error on delete');
      return res.status(500).send('We failed to delete for some reason');
    }

    return res.status(200).send('Removed Successfully');
  });
}

export default {
  all,
  add,
  update,
  remove
};
