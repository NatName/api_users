import React, {Component} from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import axios              from 'axios'
import "regenerator-runtime/runtime";
import './list.scss'

const Buttons = (props) => {
  function canNextPage (offset) {
    return offset <= 0 || offset >= 100 ? true : false;
  };

  return (
    <div className="pagination">
      <button onClick={() => props.fetchData({offset: props.offset - 1})} disabled={canNextPage(props.offset)}>
            {'<'}
      </button>{' '}
      <button onClick = {() => props.fetchData({offset: props.offset - 1})} disabled={canNextPage(props.offset)}>
      {props.offset }
      </button>{' '}
      <button onClick = {() => props.fetchData({offset: props.offset})} disabled={canNextPage(props.offset + 1)} className="currentButton">
      {props.offset + 1}
      </button>{' '}
      <button onClick = {() => props.fetchData({offset: props.offset + 1})} disabled={canNextPage(props.offset + 2)}>
      {props.offset + 2}
      </button>{' '}
      <button onClick={() => props.fetchData({offset: props.offset + 1})} disabled={canNextPage(props.offset + 1)}>
            {'>'}
      </button>{' '}
    </div>);
};

const Table = ({data, redirect}) => {
  function handleClick(e) {
    e.preventDefault();
    const id = e.target.closest("tr").getAttribute('data-key');
    redirect(id);
  }
  return (<tbody>
    {data.map(
            (row, i) => {
              return (
                  <tr key={i}  data-key={row.id} onClick={handleClick}>
                    {Object.keys(row).map((cell, j) => {
                      return (<td key={j}>{row[cell]}</td>
                    )})}
                  </tr>
              )
          })
    }
  </tbody>);
};

const Header = props => (
  <thead>
      <tr>
        {props.columns.map(
          (row, i) => {
            return (<td key={i} className={`head_${i}`}>{row['Header']}</td>
            )}
        )}
      </tr>
  </thead>
);

 class UsersList extends Component {
  constructor(props) {
     super(props);
     this.state = {
       data: [],
       pageCount: 0,
       sortedBy: 'id',
       offset : 0,
       limit: 10,
       redirect: false,
       currentId : 0
     };
     this.fetchData = this.fetchData.bind(this);
     this.showUser = this.showUser.bind(this);
     this.redirect = this.redirect.bind(this);
  }

  getData () {
    axios.get(`http://localhost:3001/users?sortedBy=${this.state.sortedBy}&offset=${this.state.offset}&limit=${this.state.limit}`)
      .then(response => {
          this.setState({data: response.data});
      })
      .catch(function (error) {
          console.log(error);
      })
  }

  componentDidMount() {
      this.getData();
  }

  redirect(id) {
    this.setState({redirect: true, currentId: id});
  }

  showUser(id) {
    const { history } = this.props;
    if(history) history.push(`/users/${id}`);
  }

  async fetchData ({ offset=this.state.offset, limit=this.state.limit, sortedBy=this.state.sortedBy }) {
    await this.setState({
      offset,
      limit,
      sortedBy
    });
    this.getData();
  }

  render () {
    const columns = [
        {
          Header: 'Id',
          accessor: 'id',
        },
        {
          Header: 'First Name',
          accessor: 'first_name',
        },
        {
          Header: 'Last Name',
          accessor: 'last_name',
        },
        {
          Header: 'Email',
          accessor: 'email',
        },
        {
          Header: 'Gender',
          accessor: 'gender',
        },
        {
          Header: 'IP address',
          accessor: 'ip_address',
        },
        {
          Header: 'Total clicks',
          accessor: 'clicks',
        },
        {
          Header: 'Total page views',
          accessor: 'page_view',
        }
      ]
    if (this.state.redirect) {
      return <Redirect push to={`user/${this.state.currentId}`} />;
    }

    return (
      <>
      <table>
        <Header columns={columns}/>
        <Table data={this.state.data} redirect={this.redirect}/>
      </table>
      <Buttons fetchData={this.fetchData} offset={this.state.offset}/>
      </>
    );
  }
}
export default withRouter(UsersList)
