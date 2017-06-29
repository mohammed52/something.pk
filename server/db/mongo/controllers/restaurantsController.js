import _ from 'lodash';
import Restaurants from '../models/restaurantsModel';

/**
 * List
 */
export function all(req, res) {
  Restaurants.find({}).exec((err, restaurants) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }

    return res.json(restaurants);
  });
}

/**
 * Add a Restaurants
 */
export function add(req, res) {
  Restaurants.create(req.body, (err) => {
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
    Restaurants.findOneAndUpdate(query, data, (err) => {
      if (err) {
        console.log('Error on save!');
        return res.status(500).send('We failed to save for some reason');
      }

      return res.status(200).send('Updated successfully');
    });
  } else if (isUpdateCards) {
    Restaurants.findOneAndUpdate(query, {
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
  Restaurants.findOneAndRemove(query, (err) => {
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