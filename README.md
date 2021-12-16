# Global Github Actions

Here be dragons.

https://github.com/actions/toolkit/blob/master/README.md

🐉

## sanitize-docker-tag
This action returns a safe tag to push an image to a registry
### inputs
- tag: **(Required)** Text to sanitize

### outputs
- sanitized_tag: Clean version of the tag

### Example usage
```yaml
- id: sanitize-docker-tag
  uses: condenast/actions/sanitize-docker-tag@v1
  with:
    tag: //I'M " ` unsanitized .,-/
- name: build docker image
  run: docker build -t image:${{ steps.sanitize-docker-tag.outputs.sanitized_tag }} .
```
