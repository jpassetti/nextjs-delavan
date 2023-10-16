const ErrorMessage = () => {
    return (
      <div style={{ color: "red" }}>
        <strong>url</strong> or <strong>siteUrl</strong> and{" "}
        <strong>formId</strong> are mandatory attributes
      </div>
    )
}
export default ErrorMessage;