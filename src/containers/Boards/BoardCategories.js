import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import BoardsList from 'components/Boards/BoardsList';
import NotAvailable from 'components/NotAvailable/NotAvailable';
import * as BoardsActions from 'redux/modules/boards';

@connect(
  state => ({
    categories: state.boards.categories
  }),
  { ...BoardsActions }
)
class BoardCategories extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.object),
    getCategories: PropTypes.func.isRequired
  };

  static defaultProps = {
    categories: null
  };

  componentWillMount() {
    const { getCategories, categories } = this.props;
    if (categories == null) {
      getCategories();
    }
  }

  render() {
    const { categories } = this.props;
    return (
      <div>
        <Helmet title="boards" />
        {categories && (
          <div>
            <BoardsList />
          </div>
        )}
        {!categories && (
          <div>
            <NotAvailable />
          </div>
        )}
      </div>
    );
  }
}

export default BoardCategories;
