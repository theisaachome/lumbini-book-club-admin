import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAuthors } from "../../actions/author";
import Table from "../../components/Table";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";

const Authors = ({ getAuthors, author: { authors, loading } }) => {
  useEffect(() => {
    getAuthors();
  }, [getAuthors]);
  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "Authors",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "name",
          }
        ],
      },
      {
        // first group - TV Show
        Header: "Details",
        // First group columns
        columns: [
            {
                Header: "Bio",
                accessor: "bio",
              },
              {
                Header: "Gender",
                accessor: "gender",
              },
              {
                Header: "Ratings",
                accessor: "ratings",
              },
              {
                Header: "Status",
                accessor: "isActive",
                Cell:({ cell: { value } })=>{
                    return (
                      <>
                        {value ? "Active":"-NA"}
                      </>
                    );
                }
              },
        ],
      },
    ],
    []
  );
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div>
        <Link to="/authors/new">Add New</Link>
      </div>
      <Table columns={columns} data={authors}></Table>
    </>
  );
};

Authors.propTypes = {
  getAuthors: PropTypes.func.isRequired,
  author: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  author: state.author,
});
export default connect(mapStateToProps, { getAuthors })(Authors);
