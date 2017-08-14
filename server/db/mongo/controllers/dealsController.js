import _ from 'lodash';
import Deal from '../models/dealsModel';

/**
 * List
 */
export function all(req, res) {
  Deal.find({}).exec((err, deals) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }

    return res.json(deals);
  });
}

/**
 * Add a Deal
 */
export function add(req, res) {
  Deal.create(req.body, (err) => {
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
  console.log("dealUpdate");
  const query = {
    id: req.params.id
  };
  const isUpdateDeal = req.body.isUpdateDeal;
  const omitKeys = ['id', '_id', '_v', 'isUpdateDeal'];
  const data = _.omit(req.body, omitKeys);

  if (isUpdateDeal) {
    Deal.findOneAndUpdate(query, {
      $set: {
        cardDeals: data.newCardDeals,
        generalDeal: data.newGeneralDeal,
        expiry: data.newExpiry,
        disabled: data.newDisabled
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
  Deal.findOneAndRemove(query, (err) => {
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
