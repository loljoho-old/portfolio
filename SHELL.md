Batch Renaming
--------------

__Note:__ beware of filenames that include spaces

```
# -------------------------------
# rename all `icon__*.svg` to `*.svg`
# -------------------------------
for file in icon__*.svg;
do mv "$file" "${file#icon__}"; 
done;
```

```
# -------------------------------
# rename all `*.svg` to `button__*.svg`
# -------------------------------
for file in *.svg;
do mv "$file" "button__$file";
done;
```

From [StackOverflow](http://stackoverflow.com/questions/10535985/how-to-remove-filename-prefix-with-an-posix-shell/10536148#10536148): 

> These POSIX shells use four different pattern filtering:
> 
> ${var#pattern} - Removes smallest string from the left side that matches the pattern.
> ${var##pattern} - Removes the largest string from the left side that matches the pattern.
> ${var%pattern} - Removes the smallest string from the right side that matches the pattern.
> ${var%%pattern} - Removes the largest string from the right side that matches the pattern.
> 
> Here are a few examples:
> 
> foo="foo-bar-foobar"
> echo ${foo#*-}   # echoes 'bar-foobar'  (Removes 'foo-' because that matches '*-')
> echo ${foo##*-}  # echoes 'foobar' (Removes 'foo-bar-')
> echo ${foo%-*}   # echoes 'foo-bar'
> echo ${foo%%-*}  # echoes 'foo'