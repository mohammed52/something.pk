import _ from 'lodash';
import Comment from '../models/comments';

/**
 * List
 */
export function all(req, res) {
  Comment.find({}).exec((err, comments) => {
    if (err) {
      console.log('Error in first query');
      return res.status(500).send('Something went wrong getting the data');
    }

    return res.json(comments);
  });
}

/**
 * Add a Topic
 */
export function add(req, res) {
  Comment.create(req.body, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }

    return res.status(200).send('OK');
  });
}

/**
 * Remove a topic
 */
export function remove(req, res) {
  const query = {
    id: req.params.id
  };
  Comment.findOneAndRemove(query, (err) => {
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
  remove
};
