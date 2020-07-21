import React, { Component } from "react";
import { Field, reduxForm, reset } from "redux-form";
import { connect } from "react-redux";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'

class AddBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      cateory: "",
      content: "",
      msg: "",
      hover: false
    };
    let error = "";
  }

  seterror = () => {
    this.setState({
      msg: "Fail to add please try again!!!",
    });
  };

  submitData = async (formValues) => {
    console.log(formValues)
    this.props.mutate({
      variables: {
        id: uuidv4(),
        userId: this.props.auth.userId,
        userName: this.props.auth.userName,
        userImg: this.props.auth.userProfileImg,
        title: formValues.title,
        category: formValues.blog_category,
        content: formValues.blog_content,
      }
    })
  };

  renderInput({ input, label, meta, data_testid }) {
    return (
      <div className="form-group row">
        <div className="col-sm-9">
          <input
            {...input}
            data-testid={data_testid}
            className="form-control"
          />
          <div className="errtext">{meta.error}</div>
        </div>
      </div>
    );
  }

  renderTextArea({ input, label, meta, data_testid }) {
    return (
      <div className="form-group row">
        <div className="col-sm-9">
          <textarea
            {...input}
            data-testid={data_testid}
            className="form-control"
          ></textarea>
          <div>{meta.error}</div>
        </div>
      </div>
    );
  }

  toggleHover = () => {
    this.setState({ hover: !this.state.hover })
  }

  renderSelectBox = ({ input, meta, data_testid }) => {
    const categories = ['Science', 'Programming', 'Health', 'World', 'Astronomy', 'Research', 'Money', 'Food']
    var style = this.state.hover ? { "backgroundColor": "black", "color": "white" } : { "backgroundColor": "white", "color": "black" }

    return (
      <div className="form-group row">
        <div className="col-sm-9">
          <select {...input} className="form-control font" data-testid={data_testid}>
            <option defaultValue="0">Choose...</option>
            {
              categories.map((category, index) => {
                return (
                  <option
                    style={style}
                    key={index}
                    onMouseEnter={this.toggleHover()}
                    onMouseOut={this.toggleHover()}
                    value={category}>{category}</option>
                )
              })
            }
          </select>
          <div>{meta.error}</div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="blogform">
        <div className="panel panel-default">
          <div className="panel-body">
            <div role="alert">{this.state.msg} </div>
            <form
              onSubmit={this.props.handleSubmit(this.submitData)}
              className="form font"
              data-testid="addblog"
            >
              <label className="heading">Title</label>
              <Field
                name="title"
                id="inputTitle"
                component={this.renderInput}
                data_testid="title"
                placeholder="Title"
              />
              <label className="heading">Blog category</label>
              <Field
                name="blog_category"
                component={this.renderSelectBox}
                data_testid="blog_category"
              />
              <label className="heading">Content</label>
              <Field
                name="blog_content"
                component={this.renderTextArea}
                placeholder="Content"
                data_testid="blog_content"
              />
              <button className="ui inverted primary button" data_testid="submit">               
                  Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "please enter title";
  }

  if (!formValues.blog_content) {
    errors.blog_content = "please enter content for blog";
  }

  if (!formValues.blog_category) {
    errors.blog_category = "please select category";
  }

  return errors;
};

const afterSubmit = () => { };

const mutation = gql`
mutation CREATEPOST(
      $id: ID!
      $userName: String
      $userImg: String
      $userId: ID!
      $title: String
      $category: String
      $content: String
) {
  CreatePost(
      id: $id
      userName: $userName
      userImg: $userImg
      userId: $userId
      title: $title
      category: $category
      content: $content
  ) {
      title
  }
}

`


const AddBlog1 = connect(mapStateToProps, {})(AddBlog);

AddBlog = graphql(mutation)(AddBlog1)


export default reduxForm({
  form: "addblog", // a unique name for this form
  validate,
  onSubmitSuccess: afterSubmit,
})(AddBlog);
