# template-webpack-react-typescript

Template for starting a new project with React, typescript, and webpack

### Usage

Try this bash function in your .bash_profile:

```bash
create-react-app() {
    if [ -z $1 ]; then
        echo "You must supply a directory"
        return
    fi
    
    git clone https://github.com/bozdoz/template-webpack-react-typescript $1
    cd $1
    rm -rf .git
    yarn
}
```

Then, `create-react-app whatever-you-want`
